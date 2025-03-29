import ActivityKit
import Foundation

struct ExpenseActivityAttributes: ActivityAttributes {
    public struct ContentState: Codable, Hashable {
        var amount: Double
    }

    var category: String
}