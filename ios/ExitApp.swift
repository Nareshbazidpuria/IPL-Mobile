import Foundation
import UIKit

@objc(ExitApp)
class ExitApp: NSObject {

  @objc func exitApp() {
    DispatchQueue.main.async {
      UIApplication.shared.perform(#selector(NSXPCConnection.suspend))
    }
  }

  @objc static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
