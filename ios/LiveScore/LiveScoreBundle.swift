//
//  LiveScoreBundle.swift
//  LiveScore
//
//  Created by Naresh Bazidpuria on 29/03/25.
//

import WidgetKit
import SwiftUI

@main
struct LiveScoreBundle: WidgetBundle {
    var body: some Widget {
        LiveScoreControl()
        LiveScoreLiveActivity()
    }
}
