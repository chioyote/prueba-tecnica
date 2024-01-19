import { Link } from 'react-router-dom'
import '~/components/profile.scss'

const profileImage = `/assets/mine.jpg`

export const Profile = () => {
  return (
    <section className='profile'>
        <div className="profile__wrap">
            <div className='profile__image'>
                <img src={profileImage} alt="Rocio Ortiz" />
            </div>
            <div>
                <h1>Rocio Beatriz Ortiz García</h1>
                <p>Frontend Developer Sr.</p>
                <ul>
                    <li>
                        <Link to="mailto:chio.ortiz29@gmail.com" target='_blank'>chio.ortiz29@gmail.com</Link>
                    </li>
                    <li>
                        <Link to="tel:5585359958">5585359958</Link>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}
