import ActivityKit

struct ExpenseActivityAttributes: ActivityAttributes {
    struct ContentState: Codable, Hashable {
        var amount: String
        var category: String
    }
    var title: String
}