import React from 'react';
import fourStarClipSingle from '../assets/images/ui/4starwish-single.mp4'
import threeStarClipSingle from '../assets/images/ui/3starwish-single.mp4'
import fiveStarClipSingle from '../assets/images/ui/5starwish-single.mp4'

export default function Wish(props) {
  const { setView, is4StarItem, is5StarItem, isSingleItem } = props
  return (
    <>
    <button
    onClick={() => setView('wish-results')}
    className="skip-button">Skip</button>
    <video
    className="min-vh-100 w-100 overflow-hidden"
    onEnded={() => setView('wish-results')}
    playsInline
    autoPlay
    muted
    >
      <source
        src={
            is5StarItem ? fiveStarClipSingle : (is4StarItem ? fourStarClipSingle : threeStarClipSingle)
        }
        type="video/mp4"/>
    </video>
    </>
  )
}
