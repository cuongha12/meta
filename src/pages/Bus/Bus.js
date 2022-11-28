import React, { useState } from 'react'
import { Button, DatePicker, Drawer, Form, Input, Space } from 'antd';
import dayjs from 'dayjs';
const Bus = ({ open, onClose, data }) => {
    const dateFormat = 'YYYY/MM/DD';
    const [formData, setFormData] = useState({
        name: data[0].name,
        birthday: data[0].birthday
    })
    return (
        <>
            <Drawer
                title="Drawer with extra actions"
                width={500}
                onClose={onClose}
                open={open}
                extra={
                    <Space>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button type="primary" onClick={onClose}>
                            Update
                        </Button>
                    </Space>
                }
            >
                <Form
                    autoComplete="off"
                    labelCol={{ span: 10 }}
                    initialValues={{
                        remember: true,
                        name: formData.name,
                       
                    }}
                    wrapperCol={{ span: 14 }}
                    onFinish={(values) => {
                        console.log(formData);
                    }}
                    onFinishFailed={(values) => {
                        console.log(formData);
                    }}
                >
                    <Form.Item
                        name="name"
                        label="Full Name"
                        rules={[
                            {
                                required: "" ? false : true,
                                message: "Please enter your name",
                            },
                            { whitespace: true },
                            { min: 3 },
                        ]}
                        hasFeedback
                    >
                        <Input placeholder="Type your name" defaultValue={formData.birthday} onChange={(e) => setFormData({ ...formData, name: e?.target?.value })} />
                    </Form.Item>

                    {/* <Form.Item
                        name="email"
                        label="Email"
                        rules={[
                            {
                                required: true,
                                message: "Please enter your email",
                            },
                            { whitespace: true },
                            { type: "email", message: "Please enter a valid email" },
                        ]}
                        hasFeedback
                    >
                        <Input placeholder="Type your email" />
                    </Form.Item> */}

                    {/* <Form.Item
                        name="password"
                        label="Password"
                        // rules={[
                        //     {
                        //         required: true,
                        //     },
                        //     { min: 6 },
                        //     {
                        //         validator: (_, value) =>
                        //             value && value.includes("A")
                        //                 ? Promise.resolve()
                        //                 : Promise.reject("Password does not match criteria."),
                        //     },
                        // ]}
                        hasFeedback
                    >
                        <Input.Password placeholder="Type your password" />
                    </Form.Item> */}

                    {/* <Form.Item
                        name="confirmPassword"
                        label="Confirm Password"
                        dependencies={["password"]}
                        // rules={[
                        //     {
                        //         required: true,
                        //     },
                        //     ({ getFieldValue }) => ({
                        //         validator(_, value) {
                        //             if (!value || getFieldValue("password") === value) {
                        //                 return Promise.resolve();
                        //             }
                        //             return Promise.reject(
                        //                 "The two passwords that you entered does not match."
                        //             );
                        //         },
                        //     }),
                        // ]}
                        hasFeedback
                    >
                        <Input.Password placeholder="Confirm your password" />
                    </Form.Item> */}


                    <Form.Item
                        name="dob"
                        label="Date of Birth"
                        rules={[
                            {
                                required: '' ? false : true,
                                message: "Please provide your date of birth",
                            },
                        ]}
                        hasFeedback
                    >
                        <DatePicker
                            picker='date'
                            style={{ width: "100%" }}
                            placeholder="Chose date of birth"
                            defaultValue={dayjs(formData.birthday, dateFormat)}
                            format={dateFormat}
                            onChange={(e) => setFormData({ ...formData, birthday: e?.target?.value })}
                        />
                    </Form.Item>

                    {/* <Form.Item
                        name="website"
                        label="Website"
                        // rules={[{ type: "url", message: "Please enter a valid url" }]}
                        hasFeedback
                    >
                        <Input placeholder="Add your website url" />
                    </Form.Item> */}

                    <Form.Item wrapperCol={{ span: 24 }}>
                        <Button block type="primary" htmlType="submit">
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </Drawer>

        </>
    )
}

export default Bus