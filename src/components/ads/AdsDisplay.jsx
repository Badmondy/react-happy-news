const AdsDisplay = ({ adsLink = [], classPrefix = '' }) => {


    const fallBackImage = '../../assets/images/no-image.png'
    return (
            <section className={classPrefix}>
                {adsLink.map((ad) => (
                    <img src={ad.link ? ad.link : fallBackImage} alt="" key={ad.id} />

                ))}

            </section>

    )

}

export default AdsDisplay;