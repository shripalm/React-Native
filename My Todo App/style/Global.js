export const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    bold: {
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: "#333",
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
        marginVertical: 5,
        width: '100%',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
        textTransform: 'uppercase'
    },
    thumbnail: {
        width: 300,
        height: 300,
        resizeMode: "contain"
    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        width: '100%',
        fontSize: 18,
        borderRadius: 10,
        borderColor: '#333'
    },
    todoRemain: {
        backgroundColor: "transparent",
        padding: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: '#f00',
        marginTop: 5,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    todoComplete: {
        backgroundColor: "transparent",
        padding: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: '#0f0',
        marginTop: 5,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    todoText: {
        fontSize: 20,
        color: '#333',
        textTransform: 'uppercase'
    },
    headerDrawerCustoms: {
        header: {
            width: '100%',
            height: '100%',
            flexDirection: "row",
            justifyContent: "center",
            alignItems: 'center',
        },
        headerText: {
            fontWeight: 'bold',
            fontSize: 20,
            color: '#333',
            letterSpacing: 1
        },
        icon: {
            position: 'absolute',
            left: 16
        }
    }
};