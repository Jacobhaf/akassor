"use client";

import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import { GeneratedDocuments, MasterProfile, GeneratorSettings } from '@/lib/cv/schemas';

const styles = StyleSheet.create({
    page: {
        padding: 30,
        fontFamily: 'Helvetica',
        fontSize: 10,
        lineHeight: 1.5,
        color: '#333',
    },
    // Common
    headerTitle: { fontSize: 24, fontWeight: 'bold', marginBottom: 2 },
    headerSubtitle: { fontSize: 14, color: '#666', marginBottom: 8 },
    contactLine: { flexDirection: 'row', gap: 10, fontSize: 9, color: '#555', flexWrap: 'wrap', marginBottom: 15 },

    // Section
    section: { marginBottom: 15 },
    sectionTitle: { fontSize: 11, fontWeight: 'bold', textTransform: 'uppercase', marginBottom: 6, borderBottom: '1 solid #ccc', paddingBottom: 2 },

    // Item
    itemContainer: { marginBottom: 8 },
    itemHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline' },
    itemTitle: { fontWeight: 'bold', fontSize: 10 },
    itemDate: { fontSize: 9, color: '#666' },
    itemSubtitle: { fontSize: 9, fontStyle: 'italic', marginBottom: 2 },
    itemContent: { fontSize: 9, marginBottom: 2 },
    bullet: { fontSize: 9, marginLeft: 10 },

    // Modern specific
    modernPage: { flexDirection: 'row', padding: 0 },
    sidebar: { width: '30%', backgroundColor: '#f3f4f6', padding: 20, height: '100%' },
    mainContent: { width: '70%', padding: 20 },
    sidebarTitle: { fontSize: 10, fontWeight: 'bold', textTransform: 'uppercase', color: '#1f2937', marginTop: 15, marginBottom: 5 },
    sidebarText: { fontSize: 9, color: '#4b5563', marginBottom: 2 },

    // ATS specific
    atsPage: { padding: 40 },
});

interface Props {
    data: GeneratedDocuments;
    profile: MasterProfile;
    settings: GeneratorSettings;
}

const AtsLayout = ({ data, profile }: { data: GeneratedDocuments, profile: MasterProfile }) => (
    <Page size="A4" style={styles.atsPage}>
        <View style={{ marginBottom: 20 }}>
            <Text style={styles.headerTitle}>{profile.personal.name}</Text>
            <Text style={[styles.headerSubtitle, { color: '#000' }]}>{data.cv.headline}</Text>
            <View style={styles.contactLine}>
                <Text>{profile.personal.email}</Text>
                {profile.personal.phone && <Text> | {profile.personal.phone}</Text>}
                {profile.personal.city && <Text> | {profile.personal.city}</Text>}
                {profile.personal.linkedinUrl && <Text> | LinkedIn</Text>}
            </View>
        </View>

        {data.cv.sections.map((section, idx) => (
            <View key={idx} style={styles.section}>
                <Text style={[styles.sectionTitle, { color: '#000', borderBottomWidth: 2 }]}>{section.title}</Text>

                {section.type === 'summary' && section.items[0] && (
                    <Text style={{ fontSize: 10, marginBottom: 5 }}>{section.items[0].content}</Text>
                )}

                {section.type !== 'summary' && section.items.map((item, i) => (
                    <View key={i} style={styles.itemContainer}>
                        <View style={styles.itemHeader}>
                            <Text style={styles.itemTitle}>{item.title}</Text>
                            {item.date && <Text style={styles.itemDate}>{item.date}</Text>}
                        </View>
                        {item.subtitle && <Text style={styles.itemSubtitle}>{item.subtitle}</Text>}
                        {item.content && <Text style={styles.itemContent}>{item.content}</Text>}
                        {item.bullets && item.bullets.map((b, bi) => (
                            <Text key={bi} style={styles.bullet}>• {b}</Text>
                        ))}
                    </View>
                ))}
            </View>
        ))}
    </Page>
);

const ModernLayout = ({ data, profile }: { data: GeneratedDocuments, profile: MasterProfile }) => (
    <Page size="A4" style={styles.modernPage}>
        {/* Sidebar - Personal, Skills, Short Summary */}
        <View style={styles.sidebar}>
            <Text style={[styles.headerTitle, { fontSize: 20, color: '#1f2937', marginBottom: 10 }]}>
                {profile.personal.name.split(' ')[0]}
                {'\n'}
                {profile.personal.name.split(' ').slice(1).join(' ')}
            </Text>
            <Text style={[styles.headerSubtitle, { fontSize: 12, marginBottom: 20 }]}>{data.cv.headline}</Text>

            <View style={{ marginBottom: 20 }}>
                <Text style={styles.sidebarText}>{profile.personal.email}</Text>
                <Text style={styles.sidebarText}>{profile.personal.phone}</Text>
                <Text style={styles.sidebarText}>{profile.personal.city}</Text>
            </View>

            {/* Skills in Sidebar */}
            {data.cv.sections.find(s => s.type === 'skills') && (
                <View>
                    <Text style={[styles.sidebarTitle, { borderBottom: '1 solid #d1d5db', paddingBottom: 4 }]}>Kompetenser</Text>
                    {/* We might need to map them from original profile since generated CV structure flattens things often */}
                    {/* For now use what's generated */}
                    {data.cv.sections.find(s => s.type === 'skills')?.items.map((item, i) => (
                        <Text key={i} style={styles.sidebarText}>• {item.content || item.title}</Text>
                    ))}
                </View>
            )}

            {/* Education in Sidebar (Common in modern) */}
            {data.cv.sections.find(s => s.type === 'education') && (
                <View>
                    <Text style={[styles.sidebarTitle, { borderBottom: '1 solid #d1d5db', paddingBottom: 4, marginTop: 20 }]}>Utbildning</Text>
                    {data.cv.sections.find(s => s.type === 'education')?.items.map((item, i) => (
                        <View key={i} style={{ marginBottom: 6 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 9 }}>{item.title}</Text>
                            <Text style={{ fontSize: 9, fontStyle: 'italic' }}>{item.subtitle}</Text>
                            <Text style={{ fontSize: 8, color: '#666' }}>{item.date}</Text>
                        </View>
                    ))}
                </View>
            )}
        </View>

        {/* Main Content - Experience, Summary */}
        <View style={styles.mainContent}>
            {/* Summary */}
            {data.cv.sections.find(s => s.type === 'summary') && (
                <View style={{ marginBottom: 20 }}>
                    <Text style={{ fontSize: 10, lineHeight: 1.4 }}>
                        {data.cv.sections.find(s => s.type === 'summary')?.items[0]?.content}
                    </Text>
                </View>
            )}

            {/* Experience */}
            {data.cv.sections.filter(s => s.type === 'experience').map((section, idx) => (
                <View key={idx}>
                    <Text style={[styles.sectionTitle, { color: '#2563EB', borderBottomColor: '#BFDBFE' }]}>{section.title}</Text>
                    {section.items.map((item, i) => (
                        <View key={i} style={styles.itemContainer}>
                            <View style={styles.itemHeader}>
                                <Text style={[styles.itemTitle, { fontSize: 11 }]}>{item.title}</Text>
                                <Text style={styles.itemDate}>{item.date}</Text>
                            </View>
                            <Text style={[styles.itemSubtitle, { color: '#2563EB' }]}>{item.subtitle}</Text>
                            <Text style={{ fontSize: 9.5, marginTop: 4, marginBottom: 4 }}>{item.content}</Text>
                            {item.bullets && item.bullets.map((b, bi) => (
                                <Text key={bi} style={[styles.bullet, { marginBottom: 2 }]}>• {b}</Text>
                            ))}
                        </View>
                    ))}
                </View>
            ))}

            {/* Catch-all for other sections not handled in sidebar */}
            {data.cv.sections.filter(s => !['experience', 'summary', 'education', 'skills'].includes(s.type)).map((section, idx) => (
                <View key={idx} style={styles.section}>
                    <Text style={styles.sectionTitle}>{section.title}</Text>
                    {section.items.map((item, i) => (
                        <Text key={i} style={{ fontSize: 9, marginBottom: 2 }}>• {item.title} {item.content}</Text>
                    ))}
                </View>
            ))}
        </View>
    </Page>
);

export const CvPdf = ({ data, profile, settings }: Props) => {
    return (
        <Document>
            {settings.template === 'modern' ? (
                <ModernLayout data={data} profile={profile} />
            ) : (
                <AtsLayout data={data} profile={profile} />
            )}
        </Document>
    );
};

export const CoverLetterPdf = ({ data, profile, settings }: Props) => (
    <Document>
        <Page size="A4" style={[styles.page, { padding: 40 }]}>
            {/* Header */}
            <View style={{ marginBottom: 30, borderBottom: '1 solid #eee', paddingBottom: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{profile.personal.name}</Text>
                <Text style={{ fontSize: 10, color: '#666', marginTop: 4 }}>{profile.personal.email} | {profile.personal.phone}</Text>
            </View>

            <Text style={{ fontSize: 10, marginBottom: 20, textAlign: 'right' }}>{new Date().toLocaleDateString('sv-SE')}</Text>

            {data.coverLetter.recipient && <Text style={{ fontSize: 10, fontWeight: 'bold', marginBottom: 20 }}>Till: {data.coverLetter.recipient}</Text>}

            {data.coverLetter.subject && (
                <Text style={{ fontSize: 11, fontWeight: 'bold', marginBottom: 15 }}>{data.coverLetter.subject}</Text>
            )}

            {data.coverLetter.opening && <Text style={{ fontSize: 10, marginBottom: 10 }}>{data.coverLetter.opening}</Text>}

            {data.coverLetter.paragraphs.map((p, idx) => (
                <Text key={idx} style={{ fontSize: 10, marginBottom: 10, lineHeight: 1.5, textAlign: 'justify' }}>{p}</Text>
            ))}

            <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 10, marginBottom: 10 }}>{data.coverLetter.closing}</Text>
                <Text style={{ fontSize: 10, marginBottom: 20 }}>{data.coverLetter.signOff}</Text>
                <Text style={{ fontSize: 11, fontWeight: 'bold' }}>{profile.personal.name}</Text>
            </View>
        </Page>
    </Document>
);
