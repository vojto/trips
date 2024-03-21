## Installation

To be done...

## Usage

1. Run `yarn run dev` to start the dev server on port 3000.
2. Connect your iPhone to your mac.
3. Run `open ios/App.xcworkspace` and press the play button in Xcode. This should install the app on your iPhone.
4. Open another app on the background and wait for 5 minutes.
5. You should see the following output in your Xcode console:

```
[DEBUG] App uptime: 11 seconds
[DEBUG] App uptime: 21 seconds
[DEBUG] App uptime: 31 seconds
[DEBUG] App uptime: 41 seconds
[DEBUG] App uptime: 51 seconds
[DEBUG] wrapRequest error: UnknownError: Attempt to get a record from database without an in-progress transaction
[DEBUG] App uptime: 61 seconds
[DEBUG] wrapRequest error: UnknownError: Attempt to get a record from database without an in-progress transaction
[DEBUG] App uptime: 72 seconds
[DEBUG] wrapRequest error: UnknownError: Attempt to get a record from database without an in-progress transaction
[DEBUG] App uptime: 83 seconds
[DEBUG] wrapRequest error: UnknownError: Attempt to get a record from database without an in-progress transaction
[DEBUG] wrapRequest error: UnknownError: Attempt to get a record from database without an in-progress transaction
[DEBUG] App uptime: 94 seconds
[DEBUG] wrapRequest error: UnknownError: Attempt to get a record from database without an in-progress transaction
[2024-03-21T16:32:29.330Z]  @firebase/firestore: Firestore (10.9.0): INTERNAL UNHANDLED ERROR:  Attempt to get a record from database without an in-progress transaction
[DEBUG] App uptime: 105 seconds
[DEBUG] App uptime: 116 seconds
[DEBUG] App uptime: 127 seconds
[2024-03-21T16:33:12.707Z]  @firebase/firestore: Firestore (10.9.0): FIRESTORE (10.9.0) INTERNAL ASSERTION FAILED: Unexpected state
```
