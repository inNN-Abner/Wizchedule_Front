import React from 'react'
import { DefineModal } from './styles'
import { Modal } from 'react-native'
import { Container, ModalContainer, SubContainer } from '../../atoms'

interface ModalProps {
    animationType?: 'none' | 'slide' | 'fade'
    transparent?: boolean
    visible?: boolean
    bg?: string
    wdt?: string
    hgt?: string
    bdrd?: string
    pdd?: string
    align?: string
    justify?: string
    children: React.ReactNode
}

export const CreateModal = ({ visible, bg, wdt, hgt, bdrd, pdd, align, justify, children }: ModalProps) => {
    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={visible}>
            
            <ModalContainer >
                <DefineModal
                    bg={bg}
                    wdt={wdt}
                    hgt={hgt}
                    bdrd={bdrd}
                    pdd={pdd}
                    align={align}
                    justify={justify}
                    >
                    {children}
                    </DefineModal>
            </ModalContainer>
        </Modal>
    )
}