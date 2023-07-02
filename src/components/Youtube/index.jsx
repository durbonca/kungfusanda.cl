'use client';
import YouTube from 'react-youtube';

export const Youtube = () => {
  const opts = {
    width: '100%',
    height: '600',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <YouTube
      videoId={'amewj79Vzgk'} // defaults -> ''
      id={'amewj79Vzgk'} // defaults -> ''
      opts={opts} // defaults -> {}
      containerClassName="YouTube_Container" // defaults -> ''
      /* className={} // defaults -> ''
      title={} // defaults -> ''
      loading={} // defaults -> undefined
      onReady={} // defaults -> noop
      onPlay={} // defaults -> noop
      onPause={} // defaults -> noop
      onEnd={} // defaults -> noop
      onError={} // defaults -> noop
      onStateChange={} // defaults -> noop
      onPlaybackRateChange={} // defaults -> noop
      onPlaybackQualityChange={} // defaults -> noop */
    />
  );
};
