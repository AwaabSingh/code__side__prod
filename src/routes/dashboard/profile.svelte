<script context="module">
	import axios from 'axios';
	import { GetUser } from '../../Requests/users';
	import url from '../../store/url';
	import comma from '../../store/numcomma'
	export const load = async ({ session }) => {
		const u = await GetUser({ token: session.current_user.access_token });

		if (session.current_user.access_token) {
			return {
				props: {
					u: u.data
				}
			};
		}
		return {
			status: 304,
			redirect: '/',
			error: new Error('user not authorize')
		};
	};
</script>

<script>
	export let u;

	const user = u;
    let password;
    let Confpassword;
    let Newpassword;

    $: isEmpty = !password

	const handleSubmit = async () => {
		console.log('Hello world');
	};
</script>

  <div class="mt-28">
         <h2 class="text-xl md:text-4xl font-bold text-center text-dkPur">
      My Profile
  </h2>
    </div>
<div class="max-w-6xl mx-auto md:mx-20 mt-20">
    
	<div class="flex justify-between space-x-2 flex-col space-y-5 md:flex-row">
		<div class="pb-5">
            <section class="w-80 mx-auto bg-dkPur rounded-2xl px-8 py-6 shadow-lg mt-5">
			<div class="mt-6 w-fit mx-auto">
				<img
					src="https://api.lorem.space/image/face?w=120&h=120&hash=bart89fe"
					class="rounded-full w-28 "
					alt={user.fullname}
				/>
			</div>

			<div class="mt-8 ">
				<h2 class="text-white font-bold text-2xl tracking-wide capitalize">Hi, {user.fullname}</h2>
			</div>
			<p class="text-white font-semibold mt-2.5">
				{user.email}
			</p>

			<div class="mt-3 text-white text-sm space-x-5">
				<span class="text-white font-semibold">Wallet Balance:</span>
				<span class="text-white font-semibold">&#8358;{comma(user.wallet)}</span>
			</div>
		</section>
        </div>
		<div class="">
                    <h5 class='text-center font-bold text-dkPur py-3'>Rest Password</h5>
            <form on:submit|preventDefault={handleSubmit}>
			<div class="flex -mx-3">
				<div class="w-full px-3 mb-5">
					<label for="" class="text-xs font-semibold px-1">Old Password</label>
					<div class="flex">
						<div
							class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
						>
							<i class="mdi mdi-email-outline text-gray-400 text-lg" />
						</div>
						<input
							bind:value={password}
							type="password"
							class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-b-2 border-lgPur outline-none  text-dkPur"
							placeholder="******"
						/>
					</div>
				</div>
			</div>
			<div class="flex -mx-3">
				<div class="w-full px-3 mb-5">
					<label for="" class="text-xs font-semibold px-1">New Password</label>
					<div class="flex">
						<div
							class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
						>
							<i class="mdi mdi-lock-outline text-gray-400 text-lg" />
						</div>
						<input
							bind:value={Newpassword}
							type="password"
							class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-b-2 border-lgPur outline-none  text-dkPur"
							placeholder="************"
						/>
					</div>
				</div>
			</div>
            	<div class="flex -mx-3">
				<div class="w-full px-3 mb-5">
					<label for="" class="text-xs font-semibold px-1">Confim Password</label>
					<div class="flex">
						<div
							class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
						>
							<i class="mdi mdi-lock-outline text-gray-400 text-lg" />
						</div>
						<input
							bind:value={Confpassword}
							type="password"
							class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-b-2 border-lgPur outline-none  text-dkPur"
							placeholder="************"
						/>
					</div>
				</div>
			</div>

			<div class="flex -mx-3">
				<div class="w-full px-3 mb-5">
					<button
						class="block w-full max-w-xs mx-auto bg-lgPur   text-white rounded-lg px-3 py-3 font-semibold"
						disabled={isEmpty}
						class:disabled={isEmpty}>Reset</button
					>
				</div>
			</div>
			

		</form>
        </div>
	</div>
</div>


<style>
    .disabled {
  color: rgb(122, 121, 121);
  background:#afafaf;
  border-color: #afafaf;
}
.disabled:hover {
  background: transparent;
  color: #afafaf;
  border-color: #afafaf;
}

</style>