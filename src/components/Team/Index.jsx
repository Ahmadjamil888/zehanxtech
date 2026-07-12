import List from "../List"
import { Link } from 'react-router-dom'
import { LuArrowUpRight } from 'react-icons/lu'

function Team() {
  return (
    <div data-color="white" className='team section font-[SansitaReg] py-20' id="team">
      <div className="head1">
        <h1 className="text-5xl sm:text-6xl text-center tracking-tight">
          Our Team
        </h1>
      </div>
      <div className="list mt-10 w-full px-8">
        <List />
        <div className='flex items-center justify-center py-20'>
          <Link
            to="/team"
            className="flex items-center gap-2 bg-[#8b5cf6] text-white px-6 py-[1.6vh] font-[Sansita] text-[1.8vh] font-semibold hover:bg-violet-700 transition-colors"
          >
            MEET THE ENTIRE TEAM
            <LuArrowUpRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Team
