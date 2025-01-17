import React, { useRef, useState, useEffect } from 'react';
import {
  ActivityIndicator,
  SectionList,
  Text,
  View,
} from 'react-native';
import axios from 'axios';
import {
  Container,
  CarItem,
  CarName,
  SectionHeader,
  LoadingContainer,
} from './styles';
import SliderLetter from '../../components/SliderLetter';
import { alphabet } from '../../utils/constants';
import Title from '../../components/Title';
import { colors } from '../../themes/colors';
import InputText from '../../components/InputText';
import { Controller, useForm } from 'react-hook-form';
import { ICar } from '../../@types/types';

const Model = ({ route }: { route: any }) => {
  const { id } = route.params;

  const { control, watch } = useForm<FormData>({
    defaultValues: { search: '' },
  });
  const searchQuery = watch('search');
  const [loading, setLoading] = useState<boolean>(true);
  const [modelSections, setModelSections] = useState<any[]>([]);
  const [filteredSections, setFilteredSections] = useState<any[]>([]);
  const sectionListRef = useRef<SectionList>(null);

  const fetchModels = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${id}/modelos`);
      const cars = response.data.modelos;
      const years = response.data.anos; 

      const combinedData = [...cars, ...years];

      const grouped = alphabet.map((letter) => ({
        title: letter,
        data: combinedData.filter((item: ICar) => 
          item.nome.toLowerCase().startsWith(letter.toLowerCase())
        ),
      }));
  
      const notStartWithLetter = combinedData.filter((item: ICar) => 
        !alphabet.some((letter) => item.nome.toLowerCase().startsWith(letter.toLowerCase()))
      );
  
      if (notStartWithLetter.length > 0) {
        grouped.push({
          title: '#',
          data: notStartWithLetter
        });
      }
      const validSections = grouped.filter((section) => section.data.length > 0);
 
      validSections.sort((a, b) => a.title === '#' ? 1 : b.title === '#' ? -1 : a.title.localeCompare(b.title));
  
      setModelSections(validSections);
      setFilteredSections(validSections);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchModels();
  }, []);

  useEffect(() => {
    if (!searchQuery) {
      setFilteredSections(modelSections);
      return;
    }

    const queryLowerCase = searchQuery.toLowerCase();
    const filtered = modelSections
      .map((section) => ({
        ...section,
        data: section.data.filter((car: ICar) => car.nome.toLowerCase().includes(queryLowerCase)),
      }))
      .filter((section) => section.data.length > 0);

    setFilteredSections(filtered);
  }, [searchQuery, modelSections]);

  const renderCarItem = ({ item }: { item: ICar }) => (
    <CarItem>
      <CarName>{item.nome}</CarName>
    </CarItem>
  );

  const renderSectionHeader = ({ section: { title } }: { section: { title: string } }) => (
    <SectionHeader>{title}</SectionHeader>
  );

  if (loading) {
    return (
      <LoadingContainer>
        <ActivityIndicator size={40} color={colors.primary} /> 
      </LoadingContainer>
    );
  }

  return (
    <Container>
      <Title
        title="Available car model"
        size="sx"
        subtitle="Find the best car models available on the market."
        subtitleColor={colors.gray}
      />
      <View style={{ marginTop: 20 }}>
        <Controller
          control={control}
          name="search"
          render={({ field: { onChange, value } }) => (
            <InputText
              value={value}
              onChangeText={onChange}
              placeholder="Search for a car model..."
            />
          )}
        />
      </View>


      <SectionList
        ref={sectionListRef}
        sections={filteredSections}
        keyExtractor={(item) => item.codigo.toString()}
        renderItem={renderCarItem}
        renderSectionHeader={renderSectionHeader}
        getItemLayout={(_, index) => ({
          length: 50,
          offset: 50 * index,
          index,
        })}
        showsVerticalScrollIndicator={false}
        onScrollToIndexFailed={(info) => {
          sectionListRef.current?.scrollToLocation({
            sectionIndex: info.highestMeasuredFrameIndex,
            itemIndex: 0,
            animated: true,
          });
        }}
      />

      <SliderLetter sections={filteredSections} sectionListRef={sectionListRef} />
    </Container>
  );
};

export default Model;
