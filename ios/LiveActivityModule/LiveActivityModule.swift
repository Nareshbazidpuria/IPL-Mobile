import ActivityKit
import Foundation
@objc(LiveActivityModule)
import Foundation

@objc(LiveActivityModule)
class LiveActivityModule: NSObject {
    
    private var activity: Activity<ExpenseActivityAttributes>?

    @objc func startLiveActivity(_ title: String, amount: String, category: String) {
        let attributes = ExpenseActivityAttributes(title: title)
        let state = ExpenseActivityAttributes.ContentState(amount: amount, category: category)

        do {
            activity = try Activity<ExpenseActivityAttributes>.request(
                attributes: attributes,
                contentState: state,
                pushType: nil
            )
        } catch {
            print("Failed to start Live Activity: \(error)")
        }
    }

    @objc func updateLiveActivity(_ amount: String, category: String) {
        let state = ExpenseActivityAttributes.ContentState(amount: amount, category: category)
        Task {
            await activity?.update(using: state)
        }
    }

    @objc func endLiveActivity() {
        Task {
            await activity?.end(dismissalPolicy: .immediate)
        }
    }
}
