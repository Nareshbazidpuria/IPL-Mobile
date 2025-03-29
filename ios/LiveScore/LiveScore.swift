import ActivityKit
import WidgetKit
import SwiftUI

struct LiveActivityWidget: Widget {
    var body: some WidgetConfiguration {
        ActivityConfiguration(for: ExpenseActivityAttributes.self) { context in
            VStack {
                Text("₹\(context.state.amount) spent")
                Text("Category: \(context.state.category)")
            }
            .padding()
        } dynamicIsland: { context in
            DynamicIsland {
                DynamicIslandExpandedRegion(.leading) {
                    Text("💸 Expense")
                }
                DynamicIslandExpandedRegion(.trailing) {
                    Text("₹\(context.state.amount)")
                }
                DynamicIslandExpandedRegion(.center) {
                    Text("Category: \(context.state.category)")
                }
                DynamicIslandExpandedRegion(.bottom) {
                    Text("Tap for details")
                }
            } compactLeading: {
                Text("💰")
            } compactTrailing: {
                Text("₹\(context.state.amount)")
            } minimal: {
                Text("💵")
            }
        }
    }
}
