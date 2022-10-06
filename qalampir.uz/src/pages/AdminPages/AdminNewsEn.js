import React, {useEffect} from 'react';
import AdminLayout from "../../components/AdminLayout";
import {Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import {Formik} from "formik";
import {connect} from "react-redux";
import {saveNewsEn, updateState, getNewsEn, deleteNewsEn} from "../../redux/actions/newsAction";
import {FaRegEdit} from "react-icons/fa";
import {MdDeleteForever} from "react-icons/md";

const AdminNewsEn = (props) => {
    useEffect(() => {
        props.getNewsEn()
    }, [])
    return (
        <AdminLayout>
            <div className="row">
                <div className="col-12">
                    <button type='button' className='btn btn-success ml-auto my-5 d-block' onClick={() => props.updateState({openEn: true})}>Добавить Новость</button>
                </div>
                <div className="col-12">
                    <table className="table table-striped table-hover">
                        <thead>
                        <tr>
                            <th>№</th>
                            <th>Загловок</th>
                            <th>Текст</th>
                            <th>Категория</th>
                            <th>Фото</th>
                            <th>Действие</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.newsEn.map((item, index) => {
                            return (
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.title.slice(0, 22)}</td>
                                    <td>{item.text.slice(0, 50)}</td>
                                    <td>{item.category}</td>
                                    <td><img src={item.image_url} style={{width: "70px"}} alt={item.title}/>
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-success" onClick={() => props.updateState({openEn: true, selectedItemEn: item})}><FaRegEdit/></button>
                                        <button type="button" className="btn btn-danger ml-2" onClick={() => props.updateState({deleteModalEn: true, selectedIndexEn: item.id})}><MdDeleteForever/></button>
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal isOpen={props.openEn} toggle={() => props.updateState({openEn: false})}>
                <ModalHeader>
                    <div>Добавить Новость</div>
                </ModalHeader>
                <Formik
                    initialValues={{ title: '', text: '', category: '' }}
                    onSubmit={(values ) => {
                        props.saveNewsEn(values);
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
                                    name="title"
                                    className="form-control"
                                    placeholder="Заголовок"
                                    onChange={handleChange}
                                    value={values.title}
                                />
                                <textarea
                                    name="text"
                                    className="form-control mt-3"
                                    placeholder="Текст"
                                    onChange={handleChange}
                                    value={values.text}
                                />
                                <select name="category"
                                        className='form-control mt-3'
                                        onChange={handleChange}
                                        value={values.category}
                                >
                                    <option>Выберите категорию</option>
                                    <option value="late">Последние новости</option>
                                    <option value="local">Локальные новости</option>
                                    <option value="global">Мировые новости</option>
                                    <option value="tech">Новости технологии</option>
                                    <option value="sport">Новости спорта</option>
                                    <option value="business">Новости бизнеса</option>
                                </select>
                            </ModalBody>
                            <ModalFooter className="d-flex justify-content-between align-items-center">
                                <button type="submit" disabled={isSubmitting} className="btn btn-success  mt-3">Сохранить</button>
                                <button type="submit" disabled={isSubmitting} className="btn btn-secondary mt-3" onClick={() => {props.updateState({openEn: false})}}>Назад</button>
                            </ModalFooter>
                        </form>
                    )}
                </Formik>
            </Modal>

            <Modal isOpen={props.deleteModalEn} toggle={() => props.updateState({deleteModalEn: false})}>
                <ModalHeader>
                    <div>Вы точно хотите удалить</div>
                </ModalHeader>
                <ModalFooter>
                    <button type="button" className='btn btn-success' onClick={props.deleteModalEn}>Да</button>
                    <button type="button" className='btn btn-danger' onClick={() => props.updateState({deleteModalEn: false})}>Нет</button>
                </ModalFooter>
            </Modal>
        </AdminLayout>
    );
};

const mapStateToProps = (state) => {
    return {
        openEn: state.news.openEn,
        newsEn: state.news.newsEn,
        deleteModalEn: state.news.deleteModalEn,
        selectedIndexEn: state.news.selectedIndexEn,
        selectedItemEn: state.news.selectedItemEn,
    }
}

export default connect(mapStateToProps, {updateState, saveNewsEn, getNewsEn, deleteNewsEn }) (AdminNewsEn)