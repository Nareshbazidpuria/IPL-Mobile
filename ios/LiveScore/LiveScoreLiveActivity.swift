import ActivityKit
import WidgetKit
import SwiftUI

struct LiveScoreAttributes: ActivityAttributes {
    public struct ContentState: Codable, Hashable {
        var leadingName: String
        var leadingScore: Int
        var trailingName: String
        var trailingScore: Int
        var matchStatus: String
    }

    var matchTitle: String
}

struct LiveScoreLiveActivity: Widget {
    var body: some WidgetConfiguration {
        ActivityConfiguration(for: LiveScoreAttributes.self) { context in
            VStack {
                Text(context.attributes.matchTitle) // ✅ Match Title
                    .font(.headline)
                    .foregroundColor(.white)
                HStack {
                    Text("\(context.state.leadingName) \(context.state.leadingScore)")
                        .font(.title2).bold()
                        .foregroundColor(.white)
                    Text("vs")
                        .foregroundColor(.gray)
                    Text("\(context.state.trailingName) \(context.state.trailingScore)")
                        .font(.title2).bold()
                        .foregroundColor(.white)
                }
                Text(context.state.matchStatus)
                    .font(.subheadline)
                    .foregroundColor(.yellow)
            }
            .padding()
            .background(Color.black)
            .cornerRadius(10)
            .activityBackgroundTint(Color.black)
            .activitySystemActionForegroundColor(Color.white)
        } dynamicIsland: { context in
            DynamicIsland {
                DynamicIslandExpandedRegion(.center) {
                    Text(context.attributes.matchTitle) // ✅ Match Title in Expanded View
                        .font(.headline)
                        .foregroundColor(.white)
                }
                DynamicIslandExpandedRegion(.leading) {
                    VStack {
                        Text(context.state.leadingName)
                            .font(.caption)
                            .foregroundColor(.white)
                        Text("\(context.state.leadingScore)")
                            .font(.title2).bold()
                            .foregroundColor(.green)
                    }
                }
                DynamicIslandExpandedRegion(.trailing) {
                    VStack {
                        Text(context.state.trailingName)
                            .font(.caption)
                            .foregroundColor(.white)
                        Text("\(context.state.trailingScore)")
                            .font(.title2).bold()
                            .foregroundColor(.red)
                    }
                }
                DynamicIslandExpandedRegion(.bottom) {
                    Text(context.state.matchStatus)
                        .font(.footnote)
                        .foregroundColor(.yellow)
                }
            } compactLeading: {
                Text(context.state.leadingScore.description)
                    .font(.headline).bold()
                    .foregroundColor(.green)
            } compactTrailing: {
                Text(context.state.trailingScore.description)
                    .font(.headline).bold()
                    .foregroundColor(.red)
            } minimal: {
                Text("🏏") // Cricket Emoji for minimal mode
            }
            .widgetURL(URL(string: "https://www.cricbuzz.com"))
            .keylineTint(Color.blue)
        }
    }
}
