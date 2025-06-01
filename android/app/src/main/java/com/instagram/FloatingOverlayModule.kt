package com.instagram

import android.content.Context
import android.content.Intent
import android.net.Uri
import android.os.Build
import android.provider.Settings
import com.facebook.react.bridge.*

class FloatingOverlayModule(reactContext: ReactApplicationContext) :
        ReactContextBaseJavaModule(reactContext) {

  private val context: Context = reactContext

  override fun getName(): String = "FloatingOverlayModule"

  @ReactMethod
  fun checkPermission(promise: Promise) {
    val granted =
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
              Settings.canDrawOverlays(context)
            } else true
    promise.resolve(granted)
  }

  @ReactMethod
  fun requestPermission() {
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M && !Settings.canDrawOverlays(context)) {
      val intent =
              Intent(
                      Settings.ACTION_MANAGE_OVERLAY_PERMISSION,
                      Uri.parse("package:${context.packageName}")
              )
      intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
      context.startActivity(intent)
    }
  }

  @ReactMethod
  fun startService() {
    val intent = Intent(context, FloatingViewService::class.java)
    intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
    context.startService(intent)
  }
}
