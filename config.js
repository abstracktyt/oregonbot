module.exports = {
    app: {
        px: '?',
        token: 'NjQyNzc4NzkyMjE3MTQ5NDQw.GTbTDH.zoK_003JGz2rjp4I31HtiawL_xLAc_Fs6JiPyQ',
        playing: 'by Abstrackt'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
