/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React from 'react';
import { mount } from 'enzyme';
import {
  MockedFormsListDriver,
  formList
} from '../../../tests/mocks/MockedFormsListDriver';
import FormCard from '../FormCard';
import { Card } from '@patternfly/react-core/dist/js/components/Card';

describe('Form card tests', () => {
  Date.now = jest.fn(() => 1487076708000);
  const driver = new MockedFormsListDriver();
  it('renders card - with tsx', () => {
    const wrapper = mount(<FormCard driver={driver} formData={formList[0]} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('renders card - with html', () => {
    const wrapper = mount(<FormCard driver={driver} formData={formList[1]} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('simulate click on card', () => {
    const openFormSpy = jest.spyOn(driver, 'openForm');
    const wrapper = mount(<FormCard driver={driver} formData={formList[0]} />);
    wrapper.find(Card).simulate('click');
    expect(openFormSpy).toHaveBeenCalled();
  });
});
