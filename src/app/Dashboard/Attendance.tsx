'use client'

import { useState } from 'react'
import { XMarkIcon, UserPlusIcon, TrashIcon } from '@heroicons/react/24/outline'

interface Participant {
  name: string
  isPresent: boolean
  avatar?: string
}

interface AttendanceModalProps {
  isOpen: boolean
  onClose: () => void
  classData: {
    title: string
    time: string
    trainer: string
    participants: Participant[]
  }
  onUpdateParticipants?: (participants: Participant[]) => void
}

export default function Attendance({ isOpen, onClose, classData, onUpdateParticipants }: AttendanceModalProps) {
  const [participants, setParticipants] = useState(classData.participants)
  const [newParticipant, setNewParticipant] = useState('')

  const handleAttendanceChange = (index: number) => {
    const updatedParticipants = participants.map((participant, i) => 
      i === index ? { ...participant, isPresent: !participant.isPresent } : participant
    )
    setParticipants(updatedParticipants)
    onUpdateParticipants?.(updatedParticipants)
  }

  const handleAddParticipant = () => {
    if (newParticipant.trim()) {
      const updatedParticipants = [...participants, { 
        name: newParticipant.trim(), 
        isPresent: false 
      }]
      setParticipants(updatedParticipants)
      onUpdateParticipants?.(updatedParticipants)
      setNewParticipant('')
    }
  }

  const handleRemoveParticipant = (index: number) => {
    const confirmed = window.confirm('Czy na pewno chcesz usunąć tego uczestnika?')
    if (confirmed) {
      const updatedParticipants = participants.filter((_, i) => i !== index)
      setParticipants(updatedParticipants)
      onUpdateParticipants?.(updatedParticipants)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
          <div className="p-4 sm:p-6 border-b border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{classData.title}</h2>
                <p className="text-blue-600 mt-1">{classData.trainer}</p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <XMarkIcon className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-600">{classData.time}</span>
              </div>
              <div className="text-sm text-gray-500">
                Obecnych: {participants.filter(p => p.isPresent).length}/{participants.length}
              </div>
            </div>
          </div>

          <div className="p-4 border-b border-gray-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={newParticipant}
                onChange={(e) => setNewParticipant(e.target.value)}
                placeholder="Dodaj uczestnika..."
                className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onKeyPress={(e) => e.key === 'Enter' && handleAddParticipant()}
              />
              <button
                onClick={handleAddParticipant}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
              >
                <UserPlusIcon className="w-5 h-5" />
                <span>Dodaj</span>
              </button>
            </div>
          </div>

          <div className="p-4 sm:p-6 overflow-y-auto max-h-[60vh]">
            <div className="grid gap-2 sm:grid-cols-2">
              {participants.map((participant, index) => (
                <div
                  key={index}
                  className={`
                    flex items-center gap-3 p-3 rounded-lg transition-all
                    ${participant.isPresent 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-white border border-gray-200'
                    }
                  `}
                >
                  <div
                    onClick={() => handleAttendanceChange(index)}
                    className="flex items-center gap-3 flex-1 cursor-pointer"
                  >
                    <div className={`
                      flex items-center justify-center w-5 h-5 rounded border
                      ${participant.isPresent ? 'border-white' : 'border-gray-300'}
                    `}>
                      {participant.isPresent && (
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    
                    {participant.avatar ? (
                      <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                        <img src={participant.avatar} alt={participant.name} className="w-full h-full object-cover" />
                      </div>
                    ) : (
                      <div className={`
                        w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                        ${participant.isPresent ? 'bg-white/20' : 'bg-gray-100'}
                      `}>
                        {participant.name.charAt(0)}
                      </div>
                    )}
                    
                    <span className="flex-1 text-sm font-medium">{participant.name}</span>
                  </div>
                  <button
                    onClick={() => handleRemoveParticipant(index)}
                    className={`p-1.5 rounded-full transition-colors ${
                      participant.isPresent 
                        ? 'hover:bg-blue-600 text-white' 
                        : 'hover:bg-gray-100 text-gray-500'
                    }`}
                  >
                    <TrashIcon className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 sm:p-6 border-t border-gray-100">
            <button
              onClick={onClose}
              className="w-full px-4 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
            >
              Zapisz obecność
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}