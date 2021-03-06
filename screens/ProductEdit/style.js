import { StyleSheet } from 'react-native';

// ProductEdit
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
        margin: 25
    },
    textInput: {
        borderColor: '#CCCCCC',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: 50,
        fontSize: 25,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 20
    },
    textArea: {
        borderColor: '#CCCCCC',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: 100,
        fontSize: 25,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 20
    },
    categoryPicker: {
        borderColor: '#CCCCCC',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: 50,
        fontSize: 25,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 20
    },
    section: {
        margin: 10,
        fontWeight: 'bold'
    },    
    insertButtonContainer: {
        alignItems: 'flex-end'
    },  
    insertButton: {
        backgroundColor: 'green',
        width: 50,  
        height: 50,   
        borderRadius: 25,
        padding: 15,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default styles;