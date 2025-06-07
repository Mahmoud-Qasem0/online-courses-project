import {FC, JSX} from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Discussions: FC = (): JSX.Element => {
  return (
    <>
    <section className="bg-gray-200 px-4 py-6 rounded-2xl mx-2 mb-6">
        <div className="flex items-center justify-center mb-4">
          <SectionTitle title="Discussions" />
        </div>
      </section>
    </>
  )
}

export default Discussions;