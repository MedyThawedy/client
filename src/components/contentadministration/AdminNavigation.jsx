import React from 'react'
import { Link } from 'react-router-dom'


/*     <Route path='/addyoga' element={<AddYoga />} />
          <Route path='/getyogaprograms' element={<YogaPrograms />} />
          <Route path='/getmeditationprograms' element={<MeditationPrograms />} />*/

const AdminNavigation = () => {
    return (
        <div className='clsAdminNavigation'>
            <Link to='/addyoga'>Add new content</Link>
            <Link to='/getyogaprograms'>Yoga Programs</Link>
            <Link to='/getmeditationprograms'>Meditation Programs</Link>
            <Link to='/getallmusic'>Music </Link>
        </div>
    )
}

export default AdminNavigation