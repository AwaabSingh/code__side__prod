<script>
       import Icon from 'svelte-icons-pack/Icon.svelte';
       import AiOutlineStar from "svelte-icons-pack/ai/AiOutlineStar";
       import AiOutlineClockCircle from "svelte-icons-pack/ai/AiOutlineClockCircle";
       import comma from '../../store/numcomma'
       export let course;
       
</script>


        <section class="w-48 md:w-80 xl:w-96 py-8">
              <a  href={`/course/${course.publickKey}`} class="">
                  <img src="/images/hero.jpg" alt="" class='rounded-t-lg'>
              </a>
              <!-- Card content -->
              <div class="bg-white shadow-xl p-5 rounded-b-xl">
                  <!-- Card Title -->
                 <div class="card__title">
                    <h3 class='text-sm md:text-2xl font-bold text-dkPur'>{course.title}</h3>
                 </div>
                 <div class="card__rating flex py-4 justify-between">
                      <div class="flex items-center ">
                            <Icon src={AiOutlineStar} color='#F1A51F' size='20'/>
                            <span class='mx-2 text-lgPur font-bold text-sm md:text-xl'>4.5</span>
                      </div>
                      <div class="flex items-center">
                          <div class="">
                                <Icon color="#6363A3" src={AiOutlineClockCircle}/>
                          </div>
                          <span class='mx-1 text-lgPur font-bold text-sm mr-5 md:text-xl '>16 hrs</span>
                      </div>
                 </div>
                    <div class="card__price flex justify-between space-x-2 text-sm p">
                        <div class="">
                            <h6 class='md:font-bold text-md text-gray-500'>Course Price</h6>
                        </div>
                        <div class="md:font-bold text-md text-gray-500">
                            <h6>&#8358;{comma(course.price)}</h6>
                        </div>
                    </div>
              </div>
        </section>