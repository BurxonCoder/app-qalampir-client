import {useEffect} from 'react';
import AdminLayout from "../../components/AdminLayout";
import {Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import {Formik} from "formik";
import {connect} from "react-redux";
import {saveNewsUz, updateState, getNewsUz,deleteNewsUz} from "../../redux/actions/newsAction";
import {FaRegEdit} from "react-icons/fa";
import {MdDeleteForever} from "react-icons/md";

const AdminNewsUz = (props) => {
    useEffect(() => {
        props.getNewsUz()
    }, [])
    return (
        <AdminLayout>
            <div className="row">
                <div className="col-12">
                    <button type='button' className='btn btn-success ml-auto my-5 d-block' onClick={() => props.updateState({openUz: true})}>Yangilik qoshish (Uz)</button>
                </div>
                <div className="col-12">
                    <table className="table table-striped table-hover">
                        <thead>
                        <tr>
                            <th>№</th>
                            <th>Sarlavha (Uz)</th>
                            <th>Matn (Uz)</th>
                            <th>Kategoriya (Uz)</th>
                            <th>Rasm</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.newsUz.map((item, index) => {
                            return (
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.title.slice(0, 22)}</td>
                                    <td>{item.text.slice(0, 50)}</td>
                                    <td>{item.category}</td>
                                    <td>
                                        <img src={item.image_url} style={{width: "70px"}} alt={item.title}/>
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-success" onClick={() => props}><FaRegEdit/></button>
                                        <button type="button" className="btn btn-danger ml-2" onClick={() => props.updateState({deletedModalUz: true, selectedIndexUz: item.id})}><MdDeleteForever/></button>
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal isOpen={props.openUz} toggle={() => props.updateState({openUz: false})}>
                <ModalHeader>
                    <div>Yangilik qoshish Uz</div>
                </ModalHeader>
                <Formik
                    initialValues={{ title: '', text: '', category: '' }}
                    onSubmit={(values ) => {
                        props.saveNewsUz(values);
                    }}
                >
                    {({
                          values,
                          handleChange,
                          handleSubmit,
                          isSubmitting,
                      }) => (
                        <form onSubmit={handleSubmit}>
                            <ModalBody>
                                <input
                                    type="text"
                                    name="username"
                                    className="form-control"
                                    placeholder="Title (Uz)"
                                    onChange={handleChange}
                                    value={values.title}
                                />
                                <textarea
                                    type="text"
                                    name="text"
                                    className="form-control mt-3"
                                    placeholder="Text (Uz)"
                                    onChange={handleChange}
                                    value={values.text}
                                />
                                <select name="category"
                                        className='form-control mt-3'
                                        onChange={handleChange}
                                        value={values.category}
                                >
                                    <option>Choose category</option>
                                    <option value="late">Songi yangiliklar</option>
                                    <option value="local">Mahalliy yangiliklar</option>
                                    <option value="global">Jahon yangiliklar</option>
                                    <option value="tech">Texnalogiya yangiliklar</option>
                                    <option value="sport">Sport yangiliklar</option>
                                    <option value="business">Biznes yangiliklar</option>
                                </select>
                            </ModalBody>
                            <ModalFooter className="d-flex justify-content-between align-items-center">
                                <button type="submit" disabled={isSubmitting} className="btn btn-success  mt-3">Saqlash</button>
                                <button type="submit" disabled={isSubmitting} className="btn btn-secondary mt-3" onClick={() => {props.updateState({openUz: false})}}>Ortga</button>
                            </ModalFooter>
                        </form>
                    )}
                </Formik>
            </Modal>
            <Modal isOpen={props.deleteModalUz} toggle={() => props.updateState({deleteModalUz: false})}>
                <ModalHeader>
                    <div>Rostdan ham o'chirmoqchimisiz?</div>
                </ModalHeader>
                <ModalFooter>
                    <button type='button' className='btn btn-success' onClick={props}>Ha</button>
                    <button type='button' className='btn btn-secondary' onClick={() => props.updateState({deleteModalUz: false})}>Yo'q</button>
                </ModalFooter>
            </Modal>
        </AdminLayout>
    );
};

const mapStateToProps = (state) => {
    return {
        openUz: state.news.openUz,
        newsUz: state.news.newsUz,
        deleteModalUz: state.news.deleteModalUz,
        selectedIndexUz: state.news.selectedIndexUz,
        selectedItemUz: state.news.selectedItemUz,
    }
}

export default connect(mapStateToProps, {updateState, saveNewsUz, getNewsUz,deleteNewsUz}) (AdminNewsUz);