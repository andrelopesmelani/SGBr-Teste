import { useRef, useState } from "react";
import { GestureResponderEvent, PanResponder, View, Text, StyleSheet } from "react-native";
import { AlphabetContainer, AlphabetText, IndicatorText, LetterIndicator } from "./styles";
import { alphabet } from "../../utils/constants";

interface ISliderLetterProps {
    sectionListRef: any;
    sections: any;
}

const SliderLetter = ({ sectionListRef, sections }: ISliderLetterProps) => {
    const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
    const sliderRef = useRef<View>(null);

    const scrollToLetter = (letter: string) => {
        const index = sections.findIndex((section: { title: string; }) => section.title === letter);
        if (index !== -1) {
            sectionListRef.current?.scrollToLocation({
                sectionIndex: index,
                itemIndex: 0,
                animated: true,
            });
        }
    };

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (evt: GestureResponderEvent, gestureState) => {
            const { moveY } = gestureState;
            sliderRef.current?.measure((x, y, width, height, pageX, pageY) => {
                const relativeY = moveY - pageY;
                const letterIndex = Math.floor((relativeY / height) * alphabet.length);
                if (letterIndex >= 0 && letterIndex < alphabet.length) {
                    const letter = alphabet[letterIndex];
                    setSelectedLetter(letter);
                    scrollToLetter(letter);
                }
            });
        },
        onPanResponderRelease: () => {
            setTimeout(() => setSelectedLetter(null), 500); 
        },
    });


    return (
        <AlphabetContainer ref={sliderRef} {...panResponder.panHandlers}>
            {alphabet.map((letter) => (
                <AlphabetText key={letter} isSelected={selectedLetter === letter}>
                    {letter}
                </AlphabetText>
            ))}
            {selectedLetter && (
                <LetterIndicator>
                    <IndicatorText>{selectedLetter}</IndicatorText>
                </LetterIndicator>
            )}
        </AlphabetContainer>
    )
}


export default SliderLetter;