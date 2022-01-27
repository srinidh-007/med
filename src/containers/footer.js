import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/icons'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Title>Quick links</Footer.Title>
                        <Footer.Link href="#">home</Footer.Link>
                        <Footer.Link href="#">profile</Footer.Link>
                        <Footer.Link href="#">Dashboard</Footer.Link>
                        <Footer.Link href="#">history</Footer.Link>
                        <Footer.Link href="/activeappointments">Appointments</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>My Account</Footer.Title>
                        <Footer.Link href="#">sign in/up</Footer.Link>
                        <Footer.Link href="#">Account Settings</Footer.Link>
                        <Footer.Link href="#">Previous history</Footer.Link>
                        <Footer.Link href="#">Logout</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Contact Us</Footer.Title>
                        <Footer.Link href="mailto:sandeep.t19@iiits.in">Sandeep</Footer.Link>
                        <Footer.Link href="#">nithish</Footer.Link>
                        <Footer.Link href="#">harshith</Footer.Link>
                        <Footer.Link href="#">jaswanth</Footer.Link>
                        <Footer.Link href="#">srinidh</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Social</Footer.Title>
                        <Footer.Link href="#"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                        <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                        <Footer.Link href="#"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                        <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                    </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}