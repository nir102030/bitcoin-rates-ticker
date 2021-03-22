import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Pressable,
} from 'react-native';
import {initWebSocket, closeWs} from '../api/websocket';

const BitcoinRatesScreen = () => {
  const [currentRate, setCurrentRate] = useState('');
  const [rates, setRates] = useState([]);
  const [ws, setWs] = useState(null);
  const scrollViewRef = useRef();

  const renderRates = () => {
    return rates.map((rate, index) => {
      //define the rate color: first one - black, greater then last - green, smaller then last - red
      const color =
        index == 0 ? 'black' : rate > rates[index - 1] ? 'green' : 'red';
      return (
        <Text key={index} style={[styles.rate, {color: color}]}>
          {rate}
        </Text>
      );
    });
  };

  //update rates when the current rate is changed (new rate is sent by ws msg)
  useEffect(() => {
    const updateRates = () => {
      currentRate && ws ? setRates([...rates, currentRate]) : null;
    };
    updateRates();
  }, [currentRate]);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      ref={scrollViewRef}
      onContentSizeChange={() => {
        scrollViewRef.current.scrollToEnd({animated: true});
      }}>
      <Text style={styles.header}>Live Bitcoin rates</Text>
      <View style={styles.rates}>{renderRates()}</View>
      <Pressable
        onPress={
          ws
            ? () => closeWs(ws, setWs)
            : () => initWebSocket(setCurrentRate, setWs)
        }
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.button,
        ]}>
        <Text style={styles.buttonText}>Start/Stop</Text>
      </Pressable>
    </ScrollView>
  );
};

export default BitcoinRatesScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  header: {
    color: 'green',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30,
    position: 'absolute',
  },

  rates: {
    flexWrap: 'wrap',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 20,
    position: 'relative',
    top: 50,
  },

  rate: {
    marginHorizontal: 5,
    marginVertical: 3,
    fontSize: 16,
  },

  button: {
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').height * 0.1,
    marginBottom: 50,
    marginTop: Dimensions.get('window').height * 0.1,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },

  buttonText: {
    fontSize: 18,
  },
});
