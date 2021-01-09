import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

class App extends Component {
    state = {
        data: []
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        const response = await fetch("https://randomuser.me/api?results=500");
        const json = await response.json();
        this.setState({ data: json.results });
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    keyExtractor={(x, i) => i}
                    renderItem={({ item }) =>
                        <Text>
                            {`${item.name.first} ${item.name.last}`}
                        </Text>
                    }
                />
            </View>
        )
    }
}

export default App;

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff'
    }
})
