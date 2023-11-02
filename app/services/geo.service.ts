import { PermissionsAndroid, Platform } from 'react-native';
import Geo, { GeoError, GeoPosition } from 'react-native-geolocation-service';

class _GeoService {
  async requestPermission() {
    if (Platform.OS === 'ios') {
      await Geo.requestAuthorization('whenInUse');
    } else if (Platform.OS === 'android') {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Blood Book',
          message: 'Blood Book needs your location',
          buttonPositive: 'Allow',
        },
      );
    }
  }

  async getCurrentPosition(): Promise<Geo.GeoPosition> {
    return new Promise((resolve, reject) => {
      Geo.getCurrentPosition(
        val => {
          resolve(val);
        },
        error => reject(error),
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
          forceRequestLocation: true,
        },
      );
    });
  }

  addListener(
    listener: (pos: GeoPosition) => void,
    onError: (err: GeoError) => void = () => {},
  ) {
    const id = Geo.watchPosition(listener, onError, {
      enableHighAccuracy: true,
      distanceFilter: 200,
      interval: 30 * 1000,
      fastestInterval: 10000,
      showLocationDialog: true,
      forceRequestLocation: true,
    });
    return () => {
      Geo.clearWatch(id);
    };
  }
}

export const geo = new _GeoService();
