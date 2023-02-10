import './Modal.css'

export default function ModalWin({active, closeActive}) {
    return (
        <div className={active ?  'modal active' : 'modal'}>
            <div className='modal-content'>
                <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
                <div className='btn-group'>
                    <button type="button" class="btn btn-secondary">Отправить</button>
                    <button type="button" class="btn btn-light" onClick={() => closeActive()}>Закрыть</button>
                </div>
                
            </div>
        </div>
    )
}