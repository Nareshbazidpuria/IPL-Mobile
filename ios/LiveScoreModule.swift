//
//  LiveScore.swift
//  Instagram
//
//  Created by Naresh Bazidpuria on 29/03/25.
//

import Foundation
import ActivityKit


@objc(LiveScore)
class LiveScore: NSObject {
  @objc(startActivity)
  func startActivity() {
    do{
      if #available(iOS 16.1, *) {
        let liveScoreAttribute=LiveScoreAttributes(matchTitle:  "CSK vs RCB")
        let liveScoreContentState=LiveScoreAttributes.ContentState(leadingName: "Naresh", leadingScore: 126, trailingName: "Bazidpuria", trailingScore: 200, matchStatus: "Live - 20th Over")
        let activity = try Activity<LiveScoreAttributes>.request(attributes: liveScoreAttribute, contentState: liveScoreContentState,pushType: nil)
        
      } else {
        print("Not Supported")
      }
      
    }catch let error as NSError{
      print(error)
    }
  }

  @objc(updateActivity:)
  func updateActivity(name:String) { 
    do{
      if #available(iOS 16.1, *){
        let liveScoreContentState = LiveScoreAttributes.ContentState(leadingName: name, leadingScore: 200, trailingName: "Bazidpuria", trailingScore: 3000, matchStatus: "Live - 20th Over")
        Task{
          for activity in Activity<LiveScoreAttributes>.activities {
            await activity.update(using: liveScoreContentState)
          }
        }
      }
    }catch(_){
      print("some error")
    }
  }
  
  
  @objc(endActivity)
  func endActivity() {
    Task {
      for activity in Activity<LiveScoreAttributes>.activities {
        await activity.end()
      }
    }
  }
}
 
