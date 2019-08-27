package com.example.android.skimmersnap;

import android.content.Context;
import android.os.Build;
import android.os.VibrationEffect;
import android.os.Vibrator;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.webkit.JavascriptInterface;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    Vibrator vibrator;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        vibrator = (Vibrator) getSystemService(VIBRATOR_SERVICE);
        WebView chiWeb = new WebView(this);
        chiWeb.loadUrl("file:///android_asset/snapchat.html");
        chiWeb.getSettings().setMediaPlaybackRequiresUserGesture(false);
        chiWeb.getSettings().setMixedContentMode(WebSettings.MIXED_CONTENT_ALWAYS_ALLOW);
        chiWeb.getSettings().setDomStorageEnabled(true);
        chiWeb.getSettings().setJavaScriptEnabled(true);
        chiWeb.getSettings().setAppCacheEnabled(true);
        chiWeb.getSettings().setLoadsImagesAutomatically(true);
        chiWeb.addJavascriptInterface(new WebAppInterface(this), "Android");
        chiWeb.setWebViewClient(new SkimmerWebViewClient());
        setContentView(chiWeb);
    }

    private class SkimmerWebViewClient extends WebViewClient {

        @Override
        public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
            Log.d("Navigation Client", "Calling overview page " + request.getUrl().toString());
            view.loadUrl(request.getUrl().toString());
            return true;
        }

    }

    public class WebAppInterface {
        Context mContext;

        /** Instantiate the interface and set the context */
        WebAppInterface(Context c) {
            mContext = c;
        }

        /** Show a toast from the web page */
        @JavascriptInterface
        public void showToast(String toast) {
            Toast.makeText(mContext, toast, Toast.LENGTH_LONG).show();
        }

        @JavascriptInterface
        public void vibrateInPattern() {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                long[] mVibratePattern = new long[]{0, 400, 400, 400};
                //vibrator.vibrate(VibrationEffect.createOneShot(200, VibrationEffect.DEFAULT_AMPLITUDE));
                VibrationEffect effect = VibrationEffect.createWaveform(mVibratePattern, -1);
                vibrator.vibrate(effect);
            }
        }

        @JavascriptInterface
        public void vibrateInPattern1() {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                long[] mVibratePatternTime = new long[]{0, 150, 50, 100, 50, 50, 50, 50, 50, 50};

                int[] mvibraAmps = new int[] {0, 50, 0, 50, 0, 50, 0, 50, 0, 50};
                //vibrator.vibrate(VibrationEffect.createOneShot(200, VibrationEffect.DEFAULT_AMPLITUDE));
                VibrationEffect effect = VibrationEffect.createWaveform(mVibratePatternTime, mvibraAmps, -1);
                vibrator.vibrate(effect);
            }
        }

        @JavascriptInterface
        public void vibrateOnce() {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {

                vibrator.vibrate(VibrationEffect.createOneShot(200, VibrationEffect.DEFAULT_AMPLITUDE));
            }
        }
    }
}
