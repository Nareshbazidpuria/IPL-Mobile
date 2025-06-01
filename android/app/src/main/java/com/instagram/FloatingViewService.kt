package com.instagram

import android.app.Service
import android.content.Intent
import android.graphics.PixelFormat
import android.os.IBinder
import android.view.*
import android.widget.ImageView
import android.widget.TextView

class FloatingViewService : Service() {

  private lateinit var windowManager: WindowManager
  private lateinit var floatingView: View
  private lateinit var layoutParams: WindowManager.LayoutParams

  override fun onBind(intent: Intent?): IBinder? = null

  override fun onCreate() {
    super.onCreate()

    // Inflate layout
    floatingView = LayoutInflater.from(this).inflate(R.layout.floating_view, null)

    // Setup layout params
    layoutParams =
            WindowManager.LayoutParams(
                    WindowManager.LayoutParams.WRAP_CONTENT,
                    WindowManager.LayoutParams.WRAP_CONTENT,
                    if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.O)
                            WindowManager.LayoutParams.TYPE_APPLICATION_OVERLAY
                    else WindowManager.LayoutParams.TYPE_PHONE,
                    WindowManager.LayoutParams.FLAG_NOT_FOCUSABLE,
                    PixelFormat.TRANSLUCENT
            )

    layoutParams.gravity = Gravity.TOP or Gravity.START
    layoutParams.x = 100
    layoutParams.y = 300

    // Add to window
    windowManager = getSystemService(WINDOW_SERVICE) as WindowManager
    windowManager.addView(floatingView, layoutParams)

    // Close button logic
    val closeButton = floatingView.findViewById<ImageView>(R.id.close_button)
    closeButton.setOnClickListener { stopSelf() }

    // Drag + Click logic
    var initialX = 0
    var initialY = 0
    var initialTouchX = 0f
    var initialTouchY = 0f
    val clickThreshold = 10

    floatingView.setOnTouchListener { _, event ->
      when (event.action) {
        MotionEvent.ACTION_DOWN -> {
          initialX = layoutParams.x
          initialY = layoutParams.y
          initialTouchX = event.rawX
          initialTouchY = event.rawY
          true
        }
        MotionEvent.ACTION_MOVE -> {
          val dx = (event.rawX - initialTouchX).toInt()
          val dy = (event.rawY - initialTouchY).toInt()
          layoutParams.x = initialX + dx
          layoutParams.y = initialY + dy
          windowManager.updateViewLayout(floatingView, layoutParams)
          true
        }
        MotionEvent.ACTION_UP -> {
          val dx = (event.rawX - initialTouchX).toInt()
          val dy = (event.rawY - initialTouchY).toInt()
          if (Math.abs(dx) < clickThreshold && Math.abs(dy) < clickThreshold) {
            val intent = Intent(this, MainActivity::class.java)
            intent.addFlags(
                    Intent.FLAG_ACTIVITY_NEW_TASK or
                            Intent.FLAG_ACTIVITY_SINGLE_TOP or
                            Intent.FLAG_ACTIVITY_CLEAR_TOP
            )
            startActivity(intent)
          }
          true
        }
        else -> false
      }
    }

    // Optionally update score
    val scoreText = floatingView.findViewById<TextView>(R.id.score_text)
    scoreText.text = "India 245/4 (36.3)"
  }

  override fun onDestroy() {
    super.onDestroy()
    if (::floatingView.isInitialized) {
      windowManager.removeView(floatingView)
    }
  }
}
