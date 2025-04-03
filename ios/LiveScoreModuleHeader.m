#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(LiveScore, NSObject)
RCT_EXTERN_METHOD(startActivity)
RCT_EXTERN_METHOD(updateActivity: (NSString *) name)
RCT_EXTERN_METHOD(endActivity)
@end

@interface RCT_EXTERN_MODULE(ExitApp, NSObject)
RCT_EXTERN_METHOD(exitApp)
@end
