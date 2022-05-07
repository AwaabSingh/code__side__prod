<script>
</script>

<section id="hero" class="mb-40 bgimg pt-24 md:pt-32 ">
	<!-- Flex Container -->
	<div
		class="container flex flex-col-reverse items-center px-6 mx-auto  space-y-0 md:space-y-0 md:flex-row"
	>
		<!-- Left item -->
		<div class="flex flex-col md:mb-32  space-y-5 md:space-y-8 md:w-1/2 mt-10">
			<h1
				class="text_main text-6xl font-bold text-center md:text-5xl md:mt-5 md:text-left text-dkPur"
			>
				Platform for training
			</h1>
			<p class="text_main max-w-sm text-center  md:text-left font-medium">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi cumque consequuntur pariatur
				deleniti est, architecto err.
			</p>
			<div class="flex justify-center md:justify-start md:space-x-10 space-x-2">
				<a href="/register" class="btn-animated btn btn-white ">Get Started</a>
				<a href="/#" class="btn-animated  btn btn-white">Teach on Code Side</a>
			</div>
		</div>
		<!-- Image -->
		<div class="w-1/2 lg:pl-36">
			<img src="/images/codeside_nodot.png" alt="" class="rounded-xl " />
		</div>
	</div>
</section>

<style>
	.bgimg {
		/* background: url('/images/cblandinpg_2.png') no-repeat; */
		/* padding-top: 20px; */
	}

	.text_main {
		animation-name: moveInLeft;
		animation-duration: 1s;
		animation-timing-function: ease-out;
	}
	.btn:link,
	.btn:visited {
		text-decoration: none;
		padding: 1rem 1rem;
		display: inline-block;
		border-radius: 10rem;
		transition: all 0.2s;
		position: relative;
		/* font-size: 1.6rem; */
	}

	.btn:hover {
		transform: translateY(-3px);
		box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
		/* box-shadow: X Y blur; */
	}

	.btn:active {
		transform: translateY(-1px);
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
	}
	.btn-white {
		background-color: #4f4f86;
		color: #fff;
	}

	.btn::after {
		content: ' ';
		display: inline-block;
		height: 100%;
		width: 100%;
		border-radius: 10rem;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		transition: all 0.4s;
	}

	.btn-white::after {
		background: #6363a3;
	}

	.btn:hover::after {
		transform: scaleX(1.4) scaleY(1.6);
		opacity: 0;
	}

	.btn-animated {
		animation: moveInBottom 1s ease-out 0.75s;
		animation-fill-mode: backwards;
	}


	@keyframes moveInLeft {
		0% {
			opacity: 0;
			transform: translateX(-10rem);
		}
		80% {
			transform: translateX(1rem);
		}
		100% {
			opacity: 1;
			transform: translate(0);
		}
	}
	@keyframes moveInBottom {
		0% {
			opacity: 0;
			transform: translateY(3rem);
		}

		100% {
			opacity: 1;
			transform: translate(0);
		}
	}
</style>
