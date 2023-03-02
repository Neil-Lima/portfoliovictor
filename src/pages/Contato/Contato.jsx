import React from 'react'

function Contato() {
  return (
    <>
    <section class="position-relative py-4 py-xl-5">
    <div class="container position-relative">
        <div class="row d-flex justify-content-center">
            <div class="col-md-6 col-lg-4 col-xl-4">
                <div class="d-flex flex-column justify-content-center align-items-start h-100">
                    <div class="d-flex align-items-center p-3">
                        <div class="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon"><i class="fab fa-whatsapp"></i></div>
                        <div class="px-2">
                            <h6 class="mb-0">Whatsap</h6>
                            <p class="mb-0">(91) 981179825</p>
                        </div>
                    </div>
                    <div class="d-flex align-items-center p-3">
                        <div class="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon"><svg class="bi bi-envelope" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"></path>
                            </svg></div>
                        <div class="px-2">
                            <h6 class="mb-0">Email</h6>
                            <p class="mb-0">neil.033@hotmail.com</p>
                        </div>
                    </div>
                    <div class="d-flex align-items-center p-3">
                        <div class="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon"><i class="fab fa-github"></i></div>
                        <div class="px-2">
                            <h6 class="mb-0">Github</h6>
                            <p class="mb-0">Neil-Lima</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-6 col-lg-5 col-xl-4">
                <div>
                    <form class="p-3 p-xl-4" method="post">
                        <div class="mb-3">
                          <input id="name-1" class="form-control" type="text" name="name" placeholder="Name" />
                        </div>
                        <div class="mb-3">
                          <input id="email-1" class="form-control" type="email" name="email" placeholder="Email" />
                        </div>
                        <div class="mb-3">
                          <textarea id="message-1" class="form-control" name="message" rows="6" placeholder="Message"></textarea>
                        </div>
                        <div>
                          <button class="btn btn-primary d-block w-100" type="submit">Send </button>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    </div>
</section>
    </>
  )
}

export default Contato