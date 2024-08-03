'use client';
import React from 'react'
import styles from './style.module.scss';
import Link from 'next/link';

export default function index({ index, title, manageModal, duration, permalink }) {

    return (
        <Link target={'_blank'} href={`/${permalink}`} onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}} onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}} className={styles.project}>
            <h2>{title}</h2>
            <p>{duration}</p>
        </Link>
    )
}
