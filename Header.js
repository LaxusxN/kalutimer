import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button, TextInput } from "react-native";

const options = ['Agregar Tareas', 'Lista de Tareas', 'Resultados'];

export default function Header({ task, setTask, timeTask, setTimeTask }) {
    const [selectedOption, setSelectedOption] = useState(0);


    function handlePress(index) {
        switch (index) {
            case 0:
                return (
                    <View>
                        <Text>Hola soy la opción 1</Text>
                    </View>
                );
            case 1:
                return (
                    <View>
                        <Text>Hola soy la opción 2</Text>
                    </View>
                );


        }
    }

    return (
        <View style={{flexDirection:'column',}}>
            <View style={styles.header}>
                {options.map((item, index) => (
                    <TouchableOpacity key={index}
                        style={styles.itemOption}
                        onPress={() => setSelectedOption(index)}
                    >
                        <Text>{item}</Text>
                    </TouchableOpacity>


                ))}
               
            </View>
            <View style={styles.content}>
                    {selectedOption === 0 ? (
                        <>
                        <Text>Ingrese el nombre de la tarea:</Text>
                        <TextInput 
                        value={task}
                        onChangeText={text=>setTask(text)}/>
                        <Text>Ingrese el tiempo</Text>
                        <TextInput 
                        value={timeTask.toString()}
                        onChangeText={text=>setTimeTask(text)}/>
                        <Button title="Ingresar Datos" />
                        </>
                        
                    ) : selectedOption === 1 ? (
                        <Text>Hola soy la opción 2</Text>
                    ) : selectedOption === 2 ? (
                        <Text>Hola soy la opción 3</Text>
                    ):null}
                </View>
        </View>

    );
}

const styles = StyleSheet.create({
    header: {

        flexDirection: 'row',

    },
    itemOption: {
        borderWidth: 3,
        padding: 5,
        width: "30%",
        alignItems: "center",
    }

});