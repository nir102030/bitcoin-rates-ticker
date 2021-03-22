import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import useResults from '../hooks/useResults';
import Table from '../components/Table';

const RestAPIScreen = () => {
  const url = 'https://jsonplaceholder.typicode.com/albums';
  const [results, err] = useResults(url);

  const renderErr = () => {
    return (
      <View style={styles.errView}>
        <Text style={styles.errText}>
          Somthing went wrong with loading results
        </Text>
      </View>
    );
  };

  const renderSpinner = () => {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  };

  const renderTable = () => {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Rest API DEMO</Text>
        <Table
          title="Rest API DEMO"
          data={results}
          columnTitles={['ID', 'User ID', 'Title']}
        />
      </ScrollView>
    );
  };

  return err
    ? renderErr()
    : results.length > 0
    ? renderTable()
    : renderSpinner();
};

export default RestAPIScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
  },

  header: {
    color: 'green',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 20,
  },

  errView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  errText: {
    fontSize: 20,
    color: 'red',
  },
});
