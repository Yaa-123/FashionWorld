package com.fashionworldapp;

import com.facebook.react.ReactActivity;
import android.os.Bundle;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;

public class MainActivity extends ReactActivity {

    @Override
    protected String getMainComponentName() {
        return "FashionWorldApp";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(null); // Required for React Navigation
    }

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new DefaultReactActivityDelegate(
            this,
            getMainComponentName(),
            DefaultNewArchitectureEntryPoint.getFabricEnabled(), // Enable Fabric if needed
            DefaultNewArchitectureEntryPoint.getConcurrentReactEnabled() // Enable Concurrent React (optional)
        );
    }
}
