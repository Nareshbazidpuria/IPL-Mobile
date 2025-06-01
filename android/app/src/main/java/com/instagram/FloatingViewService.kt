package com.instagram

import android.app.Service
import android.content.Intent
import android.graphics.PixelFormat
import android.os.IBinder
import android.view.Gravity
import android.view.LayoutInflater
import android.view.WindowManager
import android.widget.TextView

class FloatingViewService : Service() {

  private var windowManager: WindowManager? = null
  private var floatingView: android.view.View? = null

  override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
    showFloatingView()
    return START_STICKY
  }

  private fun showFloatingView() {
    windowManager = getSystemService(WINDOW_SERVICE) as WindowManager
    floatingView = LayoutInflater.from(this).inflate(R.layout.floating_view, null)

    val layoutParams =
            WindowManager.LayoutParams(
                    WindowManager.LayoutParams.WRAP_CONTENT,
                    WindowManager.LayoutParams.WRAP_CONTENT,
                    if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.O)
                            WindowManager.LayoutParams.TYPE_APPLICATION_OVERLAY
                    else WindowManager.LayoutParams.TYPE_PHONE,
                    WindowManager.LayoutParams.FLAG_NOT_FOCUSABLE,
                    PixelFormat.TRANSLUCENT
            )
    layoutParams.gravity = Gravity.TOP or Gravity.CENTER_HORIZONTAL
    layoutParams.x = 0
    layoutParams.y = 100

    windowManager?.addView(floatingView, layoutParams)

    val scoreText = floatingView?.findViewById<TextView>(R.id.score_text)
    scoreText?.text = "India: 150/3 (18.2)"
  }

  override fun onDestroy() {
    super.onDestroy()
    if (floatingView != null) windowManager?.removeView(floatingView)
  }

  override fun onBind(intent: Intent?): IBinder? = null
}
