<script>
	import Carousal from '$lib/Carousal.svelte';
	import JobCard from '$lib/JobCard.svelte';
	import '../app.css';
</script>

<main>
	<section class="h-screen bg-yellow-50 px-2">
		<img src="/images/retro.png" alt="" />
		<h1 class="font-anton text-6xl text-left z-10 mt-4">Your Neighbourhood Developer</h1>
		<div class="text-left text-gray-500">
			Full Stack Developer<br /> Loves to Build Hybrid Applications.
		</div>
		<button
			class="bg-pink-500 hover:bg-pink-400 mt-4 text-white font-bold py-2 px-4 border-b-4 border-pink-700 hover:border-pink-500 rounded"
		>
			Download Resume
		</button>
	</section>

	<section class="h-screen bg-pink-200 px-2 py-4 flex flex-col items-center">
		<img src="/images/about.png" alt="" />
		<h1 class="font-anton text-6xl z-10 mt-4 text-right self-end">Journey So Far</h1>
		<div class="text-right text-gray-500 self-end">A brief timeline</div>
		<img src="/images/epics_large.svg" alt="" class="mt-8" />
	</section>

	<section class="h-screen bg-violet-100 px-2 py-4">
		<img src="/images/experience.png" alt="" />
		<h1 class="font-anton text-6xl text-left z-10 mt-4">Experience</h1>
		<div class="text-left text-gray-500">My Experience So Far</div>
		<div class="mt-4">
			<Carousal autoplay="3000">
				<JobCard
					title={'Full Stack Developer'}
					timeline={'April 5 2023 - Present'}
					decription={'Collaborating with a team of 6 members in a research and development(R&D) setting,contributing to innovative projects and leverging collective expertise to drive results.'}
					organisation={'Grampro Business Services'}
					clients={['Esaf Small Finance Bank']}
					technologies={['React', '.Net', 'Ms SQL', 'Next.JS', 'Rust']}
				/>
				<JobCard
					title={'Junior Software Engineer'}
					timeline={'Sepetember 01 2022 - March 2023'}
					decription={'Collaborating with a team of 6 members in a research and development(R&D) setting,contributing to innovative projects and leverging collective expertise to drive results.'}
					organisation={'Apton Works Pvt. Ltd.'}
					clients={['Ztoo Analytics', 'Apton One']}
					technologies={['React','Next.JS', 'GCP', 'Redux']}
				/>
			</Carousal>
		</div>
	</section>
</main>
