import React from 'react'
import '../animations/Gsap'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
const Text = () => {
gsap.registerPlugin(SplitText)
let split = SplitText.create('.text', {
    type : 'words',
});
gsap.from(split.words, {
    y:100,
    autoAlpha:0,
    stagger:0.4,
})
  return (
    <div className='text flex gap-[5px] text-4xl font-bold justify-center items-center
    mt-[250px]'>
        <div className="lines">
        <div className='word flex'>
                <div className="letter">b</div>
                <div className="letter">r</div>
                <div className="letter">e</div>
                <div className="letter">a</div>
                <div className="letter">k</div>
        </div>
        <div className='word flex'>

            <div className="letter">a</div>
            <div className="letter">p</div>
            <div className="letter">a</div>
            <div className="letter">r</div>
            <div className="letter">t</div>
        </div>
        <div className='word flex'>

            <div className="letter">w</div>
            <div className="letter">o</div>
            <div className="letter">r</div>
            <div className="letter">d</div>
            <div className="letter">s</div>
        </div>    
</div>
        <div className='word flex'>   
            <div className="letter">w</div>
            <div className="letter">i</div>
            <div className="letter">t</div>
            <div className="letter">h</div>
        </div>
        <div className='word flex'>   

            <div className="letter">g</div>
            <div className="letter">s</div>
            <div className="letter">a</div>
            <div className="letter">p</div>
        </div>
        
        <div className='word flex'>   
            <div className="letter">a</div>
            <div className="letter">n</div>
            <div className="letter">d</div>
        </div>
        <div className='word flex'>   

            <div className="letter">c</div>
            <div className="letter">h</div>
            <div className="letter">a</div>
            <div className="letter">r</div>
            <div className="letter">a</div>
            <div className="letter">c</div>
            <div className="letter">t</div>
            <div className="letter">e</div>
            <div className="letter">r</div>
        </div>

    </div>
  )
}

export default Text