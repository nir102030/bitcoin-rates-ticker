package com.bitcoinrates;

import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen;

import android.os.Bundle;
import android.widget.TextView;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "BitcoinRates";
  }
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    SplashScreen.show(this);
  }
}
