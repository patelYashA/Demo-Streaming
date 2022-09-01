import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className='text-white bg-dark position-reletive bottom-0 start-0 end-0'>
                <br />
                <p>Home | Terms & Conditions | Privacy Policy | Collection Statements | Help | Manage Accounts</p>
                <p>Copyright © 2022 Demo Streaming. All rights reserved.</p>
                <p>
                    <button className='btn btn-dark'><i className="bi bi-facebook"></i></button><button className='btn btn-dark'><i className="bi bi-twitter"></i></button><button className='btn btn-dark'><i className="bi bi-instagram"></i></button><div style={{textAlign: "right"}}><a href='http://play.google.com/store/?pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img width="125" height="50" alt='Get it on Google Play' src='https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg' /></a> <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" width="125" height="50" alt="apple" /></a> <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Get_it_from_Microsoft_Badge.svg" width="125" height="50" alt="microsoft" /></a></div>
                </p>
                <br />
            </footer>
        </div>
    )
}

export default Footer