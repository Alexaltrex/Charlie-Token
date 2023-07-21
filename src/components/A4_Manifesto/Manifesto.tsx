import {Modal} from "@mui/material";
import * as React from "react";
import {observer} from "mobx-react-lite";
import style from "./Manifesto.module.scss";
import {useStore} from "../../store/useStore";
import {svgIcons} from "../../assets/svgIcons";
import left from "../../assets/png/manifesto_left.png";
import right from "../../assets/png/manifesto_right.png";


export const Manifesto = observer(() => {
    const {manifesto, setManifesto} = useStore();
    const onClose = () => setManifesto(false);

    return (
        <Modal
            sx={{
                '& .MuiBackdrop-root': {
                    //backgroundColor: 'green',
                },
            }}
            open={manifesto}
            onClose={onClose}
            className={style.manifesto}
        >

            <div className={style.card}>
                <div className={style.inner}>
                    <button className={style.closeBtn}
                            onClick={onClose}
                    >
                        <span>x</span>
                    </button>

                    <img src={left} alt="" className={style.left}/>
                    <img src={right} alt="" className={style.right}/>

                    <p className={style.title}>
                        Manifesto
                        {svgIcons.manifesto}
                    </p>

                    <div className={style.texts}>
                        <p>
                            In the world of Web3, where ideas move quickly, I, as the beare of Charlie Token, believe in
                            the
                            power of community. Building a strong community is more important than launching a product.
                            Our
                            focus is on bringing people together who share our love for memes and our desire to
                            challenge
                            the norm.
                        </p>
                        <p>
                            Instead of starting with the strict parameters of a product launch, we choose to cultivate a
                            lively and enthusiastic community. Since the community serves as the true compass in this
                            paradigm, it leads us across the tumultuous sea of uncertainty. We provide a space where
                            memetic
                            conversation is encouraged, where laughter resonates throughout the community, and where the
                            absurdity of life finds consolation in the whimsy of crypto comedy.
                        </p>
                        <p>
                            It is through the magic of memes that we transcend the mundane, breathing life into the very
                            essence of our being. Memes, those fragments of wit and satire, become the currency of our
                            realm, forging connections that defy the boundaries of time and space. Weaving a tapestry of
                            laughter, we dare to challenge the stoic facade of finance, injecting humor into the veins
                            of a
                            system that craves levity.
                        </p>
                        <p>
                            But let it be known, dear acolytes of Charlie Token, that our journey is not one of folly
                            alone.
                            Beneath the layers of jest and jesters lies a deeper purpose, a spark of ingenuity that
                            propels
                            us forward. As we navigate the web of possibilities, we pledge to leverage our memetic
                            prowess
                            for a greater cause. From charitable endeavors to the empowerment of marginalized voices, we
                            channel the whimsy of our memes into avenues of social impact, seeking to create ripples of
                            change in the vast expanse of the digital ocean.
                        </p>
                        <p>
                            In the realm of Charlie Token, we defy the conventional notion of a product-centric
                            existence.
                            We embrace the philosophy that a thriving community is the true hallmark of success, a
                            beacon
                            that transcends the limitations of code and technology. Through the seamless integration of
                            memes and finance, we forge a path that celebrates the absurdity of our existence while
                            propelling us towards a future where laughter and prosperity intertwine.
                        </p>
                        <p>
                            So let's set out on this voyage together, my fellow memetic seekers. Let us build a
                            community
                            that defies convention, that transcends the confines of the digital landscape, and that
                            dances
                            to the rhythm of laughter and innovation. Because it is via this daring fusion of memes and
                            minds that Charlie Token's true nature will be discovered and permanently inscribed in the
                            archives of Web3 history.
                        </p>
                    </div>

                    <div className={style.logo}>
                        {svgIcons.logo_footer}
                    </div>

                </div>

            </div>

        </Modal>
    )
})
