import React from 'react'
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"



const Home = () => {
  return (
    <div className='h-screen '>
      <h1 className='text-lg font-bold text-center '>Claim Order</h1>
      <div className='flex justify-center h-full '>
        <div className='flex flex-col w-[80%]'>
          <div className='flex justify-between'>
            <div></div>
            <div>No.</div>
          </div>
          <div className='flex justify-between'>
            <div>Address...</div>
            <div>Date: yyyy-mm-dd</div>
          </div>
          <div className='flex flex-col border'>
            <div className='flex w-full'>
              <div className='flex items-center border'>
                <span className='-rotate-90 font-bold'>Product Info.</span>
              </div>
              <div className='w-full'>
                <div className='grid grid-cols-12'>
                  <div className='col-span-2 border'>
                    Category
                  </div>
                  <div className='col-span-10 grid-cols-3 grid'>
                    <div className='flex gap-1 items-center'>
                      <Checkbox />
                      <span>IPad</span>
                    </div>
                    <div className='flex gap-1 items-center'>
                      <Checkbox />
                      Cash Drawer
                    </div>
                    <div className='flex gap-1 items-center'>
                      <Checkbox />
                      Other<Input className='h-4' placeholder='......................' />
                    </div>
                  </div>
                </div>
                <div className='grid grid-cols-12'>
                  <div className='col-span-2 border'>
                    Model
                  </div>
                  <div className='col-span-10 grid-cols-12 grid'>
                    <div className='col-span-5 border'>
                      <Input />
                    </div>
                    <div className='col-span-2 border'>
                      S/N
                    </div>
                    <div className='col-span-5 border flex items-center'>
                      <Input className='' />
                    </div>
                  </div>
                </div>
                <div className='grid grid-cols-12'>
                  <div className='col-span-2 border'>
                    Warranty Status
                  </div>
                  <div className='col-span-10 grid-cols-2 grid'>
                    <div className='border flex justify-center items-center gap-1'>
                      <Checkbox />
                      In - Warranty
                    </div>
                    <div className='border flex justify-center items-center gap-1'>
                      <Checkbox />
                      Out - Warranty <Input className='w-[30%]' type='number' min={0} />THB
                    </div>
                  </div>
                </div>
                <div className='grid grid-cols-12'>
                  <div className='col-span-2 border'>
                    Accessories
                  </div>
                  <div className='col-span-8 grid-cols-2 grid border'>
                    <div>
                      <div>
                        <Checkbox />
                        <span>Power Cord</span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>LAN Cable</span>
                      </div>
                      <div className='flex items-center'>
                        <Checkbox />
                        <span>Others</span><Input className='h-4' />
                      </div>
                    </div>
                    <div className=''>
                      <div className=''>
                        <Checkbox />
                        Adapter
                      </div>
                      <div className=''>
                        <Checkbox />
                        RJ-11
                      </div>
                    </div>

                  </div>
                  <div className='col-span-2 border'>

                    <div>
                      Ref No.
                      <Input/>
                    </div>
                    <div>
                      Track No.
                      <Input/>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div>
              <div className='text-center border'>
                Symptom
              </div>
              <div>
                <Textarea placeholder='Type your message here.' />
              </div>
            </div>
            <div>
              <div className='text-center border'>
                Resolution
              </div>
              <div>
                <Textarea placeholder='Type your message here.' />
              </div>
            </div>

            <div className='grid grid-cols-12'>
              <div className='col-span-8 border text-center grid-cols-12 grid'>
                <div className='col-span-6'>
                  <div>
                    ธฤษณุ
                  </div>
                  <div>
                    (นายธฤษณุ สาขะมุติ)
                  </div>
                  <div>
                    ผู้รับเรื่อง
                  </div>
                  <div>
                    Trigger Plus co.,Itd
                  </div>
                </div>
                <div className='col-span-6'>
                  <div>..............................</div>
                  <div>(..............................)</div>
                  <div>Receiver</div>
                  <div>........../.........../..........</div>
                </div>

              </div>
              <div className='col-span-4 border text-center grid-cols-12 grid'>
              <div className='col-span-6'>
                  <div>..............................</div>
                  <div>(..............................)</div>
                  <div>Sender</div>
                  <div>........../.........../..........</div>
                </div>
                <div className='col-span-6'>
                  <div>..............................</div>
                  <div>(..............................)</div>
                  <div>Trigger Plus co.,Itd</div>
                  <div>........../.........../..........</div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Home