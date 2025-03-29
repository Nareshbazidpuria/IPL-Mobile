//
//  LiveScoreLiveActivity.swift
//  LiveScore
//
//  Created by Naresh Bazidpuria on 29/03/25.
//

import ActivityKit
import WidgetKit
import SwiftUI

struct LiveScoreAttributes: ActivityAttributes {
    public struct ContentState: Codable, Hashable {
        // Dynamic stateful properties about your activity go here!
        var emoji: String
    }

    // Fixed non-changing properties about your activity go here!
    var name: String
}

struct LiveScoreLiveActivity: Widget {
    var body: some WidgetConfiguration {
        ActivityConfiguration(for: LiveScoreAttributes.self) { context in
            // Lock screen/banner UI goes here
            VStack {
                Text("Hello \(context.state.emoji)")
            }
            .activityBackgroundTint(Color.cyan)
            .activitySystemActionForegroundColor(Color.black)

        } dynamicIsland: { context in
            DynamicIsland {
                // Expanded UI goes here.  Compose the expanded UI through
                // various regions, like leading/trailing/center/bottom
                DynamicIslandExpandedRegion(.leading) {
                    Text("Leading")
                }
                DynamicIslandExpandedRegion(.trailing) {
                    Text("Trailing")
                }
                DynamicIslandExpandedRegion(.bottom) {
                    Text("Bottom \(context.state.emoji)")
                    // more content
                }
            } compactLeading: {
                Text("L")
            } compactTrailing: {
                Text("T \(context.state.emoji)")
            } minimal: {
                Text(context.state.emoji)
            }
            .widgetURL(URL(string: "http://www.apple.com"))
            .keylineTint(Color.red)
        }
    }
}

extension LiveScoreAttributes {
    fileprivate static var preview: LiveScoreAttributes {
        LiveScoreAttributes(name: "World")
    }
}

extension LiveScoreAttributes.ContentState {
    fileprivate static var smiley: LiveScoreAttributes.ContentState {
        LiveScoreAttributes.ContentState(emoji: "😀")
     }
     
     fileprivate static var starEyes: LiveScoreAttributes.ContentState {
         LiveScoreAttributes.ContentState(emoji: "🤩")
     }
}

#Preview("Notification", as: .content, using: LiveScoreAttributes.preview) {
   LiveScoreLiveActivity()
} contentStates: {
    LiveScoreAttributes.ContentState.smiley
    LiveScoreAttributes.ContentState.starEyes
}
