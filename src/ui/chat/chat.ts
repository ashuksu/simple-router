export function sendMessage(message: string) {
    console.log('🔵 You sent: ' + message);
}

export function createConnection(serverUrl: string, roomId: string) {
    // A real implementation would actually connect to the server
    let connectedCallback;
    let timeout;
    return {
        connect() {
            timeout = setTimeout(() => {
                if (connectedCallback) {
                    connectedCallback();
                    console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');
                }
            }, 100);
        },
        on(event, callback) {
            if (connectedCallback) {
                throw Error('Cannot add the handler twice.');
            }
            if (event !== 'connected') {
                throw Error('Only "connected" event is supported.');
            }
            connectedCallback = callback;
        },
        disconnect() {
            clearTimeout(timeout);
            console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
        }
    };
}
